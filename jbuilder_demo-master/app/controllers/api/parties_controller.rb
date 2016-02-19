class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    render :index
  end

  def show
    @party = Party.find(params[:id])
    @gifts = Gift.all
    render :show
  end
end
