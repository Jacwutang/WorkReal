class User < ApplicationRecord

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 3}, allow_nil: true


  after_initialize :ensure_session_token

  attr_reader :password

  # has_many :restaurants,
  #   primary_key: :id,
  #   foreign_key: :owner_id,
  #   class_name: 'Restaurant'
  #
  # has_many :reservations,
  #   primary_key: :id,
  #   foreign_key: :user_id,
  #   class_name: 'Reservation'
  #
  #   has_many :favorite_restaurants,
  #   primary_key: :id,
  #   foreign_key: :user_id,
  #   class_name: 'Favorite'




  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end