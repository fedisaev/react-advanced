import {FC} from "react";
import cls from './LangSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {MyButton, ThemeButton} from "shared/ui/MyButton";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <MyButton theme={ThemeButton.CLEAR}
                  className={classNames(cls.LangSwitcher, {}, [className])}
                  onClick={toggle}
        >
            {t('Язык')}
        </MyButton>
    );
};