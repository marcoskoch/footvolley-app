import api from '~/services/api';

export const signIn = async (payload) => {
  try {
    const response = await api.post('sessions', payload);

    if (response.status === 200) {
      return {
        token: response.data.token,
        user: response.data.user,
      };
    }

    return { message: 'Usuário ou senha inválido!' };
  } catch (error) {
    return { message: 'Usuário ou senha inválido!' };
  }
};
