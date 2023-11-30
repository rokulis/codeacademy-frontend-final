import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n 1 zingsnis

i18n
    .use(initReactI18next) // add support for react (e.g. hooks)
    .init({
        resources: {  // resources to initialize with
            en: {
                "common": {
                    "hello": "Hello"
                }
            },
            lt: {
                "common": {
                    "hello": "Labas"
                }
            }
        },
        defaultNS: 'common'
    });
