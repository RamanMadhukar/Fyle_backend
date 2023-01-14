const { user, repos } = require('../Utils/Apis/apis');

exports.userDetail = async (req, res) => {
    const { username } = req.params;
    const userDetails = await user(username);
    const reposName = await repos(username);
    const { error } = userDetails;

    if (error) {
        return res.json({ message: "user not found" });
    }
    const { avatar_url, name, location, bio, twitter_username, blog, html_url } = userDetails.res.data;
    var reposData = []
    reposName.res.data.map(data => {
        const { name, description, html_url, language } = data;
        reposData.push({ name, description, html_url, language });
    })

    return res.json({ avatar_url, name, location, bio, twitter_username, blog, html_url, reposData });



}
