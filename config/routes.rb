Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'top#index'
  post 'memos' => 'top#create'
  delete 'memos/:id' => 'top#destroy'
end
