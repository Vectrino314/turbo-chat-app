class UserRoom < ApplicationRecord
  belongs_to :user
  belongs_to :room

  after_commit on: :create do
    broadcast_append_to(
      'user_rooms_mobile_channel',
      partial: 'shared/room',
      locals: { room: Room.find(room_id) },
      target: "user_#{user_id}_rooms_mobile"
    )
  end
  after_commit on: :create do
    broadcast_append_to(
      'user_rooms_desktop_channel',
      partial: 'shared/room',
      locals: { room: Room.find(room_id) },
      target: "user_#{user_id}_rooms"
    )
  end
end
