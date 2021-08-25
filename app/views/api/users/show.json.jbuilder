# how I have access to the user

json.partial! "api/users/user", user: @user
json.cart @user.cart