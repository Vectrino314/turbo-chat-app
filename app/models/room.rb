class Room < ApplicationRecord
  validates :name, presence: true

  has_many :user_rooms
  has_many :users, through: :user_rooms

  after_update_commit :update_room_details

  private

  def update_room_details
    broadcast_replace_to(
      'rooms_details_mobile_channel',
      partial: 'shared/room',
      locals: { room: self },
      target: "room_#{id}_mobile"
    )

    broadcast_replace_to(
      'rooms_details_desktop_channel',
      partial: 'shared/room',
      locals: { room: self },
      target: "room_#{id}_desktop"
    )
  end
end
