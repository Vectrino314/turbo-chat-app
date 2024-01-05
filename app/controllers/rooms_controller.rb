class RoomsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_room, only: %i[ show edit update destroy ]

  # GET /rooms or /rooms.json
  def index
    @rooms = Room.all
  end

  # GET /rooms/1 or /rooms/1.json
  def show
    @view_type = ''
  end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end

  # POST /rooms or /rooms.json
  def create
    @room = Room.new(room_params)

    respond_to do |format|
      if @room.save
        UserRoom.create(room: @room, user: current_user)
        format.turbo_stream { render turbo_stream: turbo_stream.append("rooms", partial: 'shared/room', locals: { room: @room })}
      else
        format.turbo_stream { render turbo_stream: turbo_stream.replace('room_form', partial: 'rooms/form', locals: { room: @room }) }
      end
    end
  end

  # PATCH/PUT /rooms/1 or /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.turbo_stream { render turbo_stream: turbo_stream.replace("room_#{@room.id}", partial: 'shared/room', locals: { room: @room }) }
        format.html { redirect_to room_url(@room), notice: "Room was successfully updated." }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1 or /rooms/1.json
  def destroy
    @room.destroy!

    respond_to do |format|
      format.html { redirect_to rooms_url, notice: "Room was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def add_user
    UserRoom.create(room_id: params[:room_id], user_id: params[:user_id])

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.replace("room_show_#{params[:room_id]}", partial: 'rooms/room', locals: { room: Room.find(params[:room_id]) }) }
    end
  end

  def create_room
    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.replace('room_form', partial: 'room/index') }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_params
    params.require(:room).permit(:name)
  end
end
