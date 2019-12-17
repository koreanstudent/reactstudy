const checkLoggedIn = (ctx, next) => {
    if(!ctx.state.user) {
        ctx.status = 401; // 권한 없음
        return;
    }
    return next();
}

export default checkLoggedIn;