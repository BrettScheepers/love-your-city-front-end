import { useSnackbar } from 'notistack';

type Detail = {
    status: "error" | "success" | "warning" | "info";
    message: string;
};

const useSnack = (detail: Detail) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    return enqueueSnackbar(detail.message, {
        variant: detail.status,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
        },
    })
}

export default useSnack