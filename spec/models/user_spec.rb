require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#create' do
    before do
      @user = FactoryBot.build(:user)
    end

    describe 'ユーザー管理機能' do
      context 'ユーザー登録がうまくいくとき' do
        it 'name,email,password,password_confirmationが存在すれば登録できる' do
          expect(@user).to be_valid
        end
        it 'emailに@があれば登録できる' do
          @user.email = '123@456'
          expect(@user).to be_valid
        end
        it 'passwordが6文字以上なら登録できる' do
          @user.password = '123456'
          @user.password_confirmation = '123456'
          expect(@user).to be_valid
        end
      end

      context 'ユーザー登録がうまくいかないとき' do
        it "nameが空では登録できないこと" do
          @user.name = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Name can't be blank")
        end
        it "passwordが空では登録できないこと" do
          @user.password = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Password can't be blank")
        end
        it "passwordが6文字以上出なければ登録できないこと" do
          @user.password = '12345'
          @user.password_confirmation = '12345'
          @user.valid?
          expect(@user.errors.full_messages).to include("Password is too short (minimum is 6 characters)")
        end
        it "passwordとpassword_confirmationが同じでなければ登録できないこと" do
          @user.password = '123456'
          @user.password_confirmation = '223456'
          @user.valid?
          expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
        end
      end
    end

  end
end
