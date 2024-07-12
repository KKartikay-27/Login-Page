const { axiosInstance } = require('./index');

//Register new user

export const RegisterUser = async(value) => {
    try {
        const response = await axiosInstance.post("api/users/register",value);
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

//Login a user

// export const LoginUser = async(value) => {
//     try {
        
//     } catch (error) {
//         console.log(error);
//     }
// }