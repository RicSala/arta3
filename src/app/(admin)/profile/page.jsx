import { ProfileForm } from '../../../../components/ProfileForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';
import { getUserById } from '../../../../database/dbUsers';




const RegisterPage = async (props) => {

    const session = await getServerSession(authOptions);
    const { _id, name, email, city } = session.user;

    let user = await getUserById(_id);

    user = JSON.parse(JSON.stringify(user)); // The id was causing problems, so we stringify and parse the user object to make it a plain object

    return (
        <ProfileForm user={user} />
    )

};


export default RegisterPage;