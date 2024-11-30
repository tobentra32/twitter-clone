interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabed?: boolean;
    outline?: boolean;
}

const Button = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabed,
    outline
}:ButtonProps) => {
    return(

        <button
          className={
            `
                disabled:opacity-78
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                hover:opacity-400
                transition
                border-2
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-white' : 'bg-sky-500'}
                ${secondary ? 'text-black' : 'text-white'}
                ${secondary ? 'border-black' : 'border-sky-500'}
                ${large ? 'text-xl' : 'text-md'}
                ${large ? 'px-5' : 'px-4'}
                ${large ? 'py-3' : 'py-2'}
                ${outline ? 'border-white' : ''}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'text-white' : ''}
            `
           }
        >

            {label}

        </button>
    );
}

export default Button;