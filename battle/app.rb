# in app.rb

require 'sinatra/base'

class Battle < Sinatra::Base

   enable :session

  get '/' do
    erb :index
  end
  # start the server if ruby file is executed directly
  
  # post '/names' do
  # session[:player_1_name] = params[:player_1_name]
  # session[:player_2_name] = params[:player_2_name]
  # redirect '/play'
  # end

get '/play' do
  @player_1_name = session[:player_1_name]
  @player_2_name = session[:player_2_name]
  erb :play
end

 post '/names' do
   session[:player_1_name] = params[:player_1_name]
   session[:player_2_name] = params[:player_2_name]
   redirect '/play'
 end

  run! if app_file == $0
end
