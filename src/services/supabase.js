import supabase from './authService';

const registerUser = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'shobhun.shah@gmail.com',
    password: '1234',
    options: {
      data: {
        full_name: 'Shobhun',
        phone: '27',
        address: '',
        avatar_url: '',
        created_at: '',
      },
    },
  });
};
