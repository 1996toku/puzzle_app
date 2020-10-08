class PuzzleController < ApplicationController
  def index
  end
  
  def new
  end

  def create
    if Puzzle.where(number: params[:number]).empty?
    @puzzle = Puzzle.create(puzzles_params)
    end
    redirect_to root_path
  end

  def destroy
    @puzzles = Puzzle.where(user_id: current_user.id)
    @puzzles.each do |puzzle|
      puzzle.destroy
    end
    redirect_to root_path
  end


  private

  def puzzles_params
    params.permit(:number).merge(user_id: current_user.id)
  end

end
