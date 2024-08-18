import { useEffect } from "react";

/**
 * @param title - Document title
 * @param description - Document meta description
 */
type Type = {
    title: string,
    description?: string,
}

/**
 * 
 * @param props Type
 * @description A hook that encapsulates the useEffect hook to change document title and description accordingly. This is hoped at enhancing UX and SEO.
 */
export const useMetadata = (props: Type) => {
    const { title, description } = props;

    useEffect(() => {
        document.title = title;
        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const newMeta = document.createElement('meta');
                newMeta.name = 'description';
                newMeta.content = description;
                document.head.appendChild(newMeta);
            }
        }
    }, [title, description]);
}