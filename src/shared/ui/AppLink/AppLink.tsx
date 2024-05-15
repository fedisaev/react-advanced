import {FC} from "react";
import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        children,
        className,
        ...othersProps
    } = props;
    return (
        <Link to={to}
              className={classNames(cls.AppLink, {}, [className, cls[theme]])}
              {...othersProps}
        >
            {children}
        </Link>
    );
};