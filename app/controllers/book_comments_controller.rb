class BookCommentsController < ApplicationController
  def create
    book = Book.find(params[:book_id])
    comment = current_user.book_comments.new(book_comment_params)
    comment.book_id = book.id
    comment.save
    redirect_to request.referer
    # redirect_to book_path(book)
  end
  
  def show
    @book = Book.find(params[:id])
    @book_comment = BookComment.new
  end
  
  def index
    @books = Book.all
    @book = Book.new
  end
  
  def destroy
    # BookComment.find(params[:id]).destroy
    BookComment.find_by(id: params[:id], book_id: params[:book_id]).destroy
    # redirect_to book_path(params[:book_id])
    redirect_to request.referer
  end

  private

  def book_comment_params
    params.require(:book_comment).permit(:comment)
  end

end
