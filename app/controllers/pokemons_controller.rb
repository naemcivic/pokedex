class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all

    respond_to do |format|
      format.html
      format.json { render json: @pokemons, :only => [:name, :image_url] }
    end

  end

  def show

    @pokemon = Pokemon.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @pokemon }
    end

  end

end
