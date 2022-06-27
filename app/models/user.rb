class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :omniauthable

  def self.from_cas(access_token)
    user = User.where(provider: access_token.provider, uid: access_token.uid).first
    if user.nil?
      user = new_from_cas(access_token)
    elsif user.provider.blank?
      user.update_with_cas(access_token)
    end
    user
  end

  def self.new_from_cas(access_token)
    user = User.new
    user.provider = access_token.provider
    user.uid = access_token.uid
    user.email = access_token.extra.mail
    user.display_name = access_token.extra.displayname || access_token.uid
    user.save!
    user
  end

  def update_with_cas(access_token)
    self.provider = access_token.provider
    self.email = access_token.extra.mail
    self.display_name = access_token.extra.displayname || access_token.uid
    save!
  end

end
