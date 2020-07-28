class Api::V1::CoursesController < Api::V1::BaseController
  def index
    @courses = Course.published.all
    render json: @courses
  end

  def show
    @course = Course.find(params[:id])
    render json: @course
  end
end
