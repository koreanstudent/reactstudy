import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String
})

// 인스턴스 메서드
UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}
// 인스턴스 메서드
UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

// 스태틱 함수에서의 this는 모델을 가리킨다. 여기서는 User를 가리킨다.
// findByUsername -> username으로 데이터를 찾을 수 있게 해준다
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
  };



const User = mongoose.model('User', UserSchema);

export default User;