class SearchesController < ApplicationController
    before_action :authenticate_user!
    
    def search
     @model = params["model"]
     @content = params["content"]
     @method = params["method"]
      if @model == 'user'
	   @records = User.search_for(@content, @method)
      else
	   @records = Book.search_for(@content, @method)
	   #@books = Book.all
	  end
    #  @records = serch_for(@model,@content,@method)
    end
    #   @range = params[:range]
    #   if @range == "User"
    #   @users = User.looks(params[:search], params[:word])
    #   else
    #   @books = Book.looks(params[:search], params[:word])
    #   end
    
    # private
    # def search_for(model,content,method)
    #     if model == 'user'
    #         if method == 'perfect'
    #             User.where(name: content)
    #         else
    #             User.where('name LIKE ?', '%'+content+'%')
    #         end
            
    #     elsif model == 'book'
    #         if method == 'perfect'
    #          Book.where(title: content)
    #         else
    #          Book.where('title LIKE ?', '%'+content+'%')
    #         end
    #     end
    # end
        
end
