module Api
  module V1
    class UsersController < Api::V1::BaseController
      def show
        user = User.find(params[:id])
        render json: user,
               except: attributes_to_exclude
      end

      def update
        user = User.find(params[:id])

        user.update!(user_params)

        head :no_content
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email)
      end

      def attributes_to_exclude
        (params[:is_user].to_s == 'true' ? [] : [:email]).concat(%i[updated_at created_at])
      end
    end
  end
end
