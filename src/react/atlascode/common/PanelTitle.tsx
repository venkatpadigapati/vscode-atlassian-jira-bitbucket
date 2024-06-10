import { makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { memo } from 'react';

type PanelTitleProps = {
    children?: React.ReactNode;
    className?: string;
};

const useStyles = makeStyles(
    (theme: Theme) =>
        ({
            root: {
                marginRight: theme.spacing(2),
            },
        } as const)
);

export const PanelTitle: React.FC<PanelTitleProps> = memo(({ children, className, ...other }) => {
    const classes = useStyles();

    return (
        <Typography variant="h4" className={clsx(classes.root, className)} {...other}>
            {children || ''}
        </Typography>
    );
});
