# myapp.rb
#set :session_secret, 'super secret'
require 'sinatra'
require 'shotgun'

get '/' do
  "Hello World"
end
#end
get '/secret' do
  'This is a secret page'
end
set :session_secret, 'super secret'

get '/random-cat' do
  @names=["Amigo", "Oscar", "Viking"].sample
  erb(:index)

end
get '/cat-form' do
  erb :cat_form
end

post'/named-cat' do
p params 
@names=params[:name]
erb(:index)
end
