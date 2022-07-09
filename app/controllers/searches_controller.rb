class SearchesController < ApplicationController
    before_action :authenticate_user!
    
    def search
     @model = params["model"]
     @content = params["content"]
     @method = params["method"]
     @records = serch_for(@model,@content,@method)
    end
    #   @range = params[:range]
    #   if @range == "User"
    #   @users = User.looks(params[:search], params[:word])
    #   else
    #   @books = Book.looks(params[:search], params[:word])
    #   end
    
    private
    def search_for(model,content,method)
        if model == 'user'
            if method == 'perfect'
                User.where(name: content)
            else
                User.where('name LIKE ?', '%'+content+'%')
            end
            
        elsif model == 'post'
            if method == 'perfect'
             Post.where(title: content)
            else
             Post.where('title LIKE ?', '%'+content+'%')
            end
        end
    end
        
end
