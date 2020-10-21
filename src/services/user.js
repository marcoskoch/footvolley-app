import api from '~/services/api';

export const update = async payload => {
  try {
    const response = await api.put('users', payload);

    if (response.status === 200) {
      return {
        user: response.data,
      };
    }

    return { message: 'Usuário ou senha inválido!' };
  } catch (error) {
    return { message: 'Usuário ou senha inválido!' };
  }
};
