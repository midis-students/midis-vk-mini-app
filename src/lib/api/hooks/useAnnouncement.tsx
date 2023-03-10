import { useSnackbar } from '@/store/Snackbar';
import { useQuery } from 'react-query';
import { Api } from '..';

export default function useAnnouncement() {
  const showError = useSnackbar((select) => select.showError);

  return useQuery({
    queryFn: () => Api.instance.getList(),
    queryKey: ['announcement'],
    staleTime: 5000,
    retry: 2,
    onError: (err) => {
      if (err instanceof Error) showError(err.message);
    },
  });
}
