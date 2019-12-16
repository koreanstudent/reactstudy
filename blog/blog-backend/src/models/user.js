import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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


UserSchema.methods.generateToken = function () {
    const token = jwt.sign (
        // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다.
        {
            _id : this.id,
            username: this.username
        },
        process.env.JWT_SECRET, // 두 번째 파리미터에는 jwt 암호를 넣습니다.
        {
            expiresIn: '7d' // 7일 동안 유효함
        }


    )
    return token;
}



const User = mongoose.model('User', UserSchema);

export default User;