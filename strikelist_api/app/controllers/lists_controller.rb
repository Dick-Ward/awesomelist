class ListsController < ApplicationController

  def index
    @lists = List.all
    render :json => @lists
  end

  def create
    @lists = List.all
    @list = List.new(list_params)
    if @list.save
      render :json => @lists
    end
  end

  def show
    @list = List.find(params["id"])
    render :json => @list
  end

  def update
    @lists = List.all
    @list = List.find(params["id"])
    if @list.update(list_params)
      render :json => @lists
    end
  end

  def destroy
    @list = List.find(params["id"])
    @lists = List.all
    @list.delete
    render :json => @lists
  end

  private

  def list_params
    params.required(:list).permit(:name, :description)
  end

end
