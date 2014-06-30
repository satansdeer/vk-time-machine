class WelcomeController < ApplicationController
  def index
    srand
    session[:state] ||= Digest::MD5.hexdigest(rand.to_s)
    # и URL страницы авторизации
    @vk_url = VkontakteApi.authorization_url(scope: [:friends, :groups, :offline, :notify], state: session[:state])

    if session[:token]
      vk = VkontakteApi::Client.new(session[:token])

      # текущий юзер
      @user = vk.users.get(uid: session[:vk_id], fields: [:screen_name, :photo]).first
    end  
  end
end
