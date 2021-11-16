import React, {CSSProperties} from "react";

enum AlertType {
    "success" = "success",
    "error" = "error",
    "info" = "success",
}

export type AlertTemplateProps = {
    style: CSSProperties,
    options: AlertTemplateOptions,
    message: string,
    close: () => void
}

type AlertTemplateOptions = {
    type: AlertType
}

export function AlertTemplate({style, options, message, close}: AlertTemplateProps) {
    const getClass = (type: AlertType) => {
        switch (type) {
            case AlertType.success:
                return 'success';
            case AlertType.error:
                return 'danger';
            case AlertType.info:
                return 'info';
            default:
                return 'type'
        }
    };

    return (
        <div className={`alert alert-${getClass(options.type)} alert-dismissible`} style={style}>
            {message}
            <button className="close" type="button" aria-label="Close" onClick={close}><span aria-hidden="true">×</span>
            </button>
        </div>
    );
}
