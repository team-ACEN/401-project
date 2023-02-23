import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth';

export default function useResource() {

    // const { tokens, logout } = useAuth();

    // add tokens back in later
    const { data, error, mutate } = useSWR([apiUrl], fetchResource);

    async function fetchResource(url) {

        // if (!tokens) {
        //     return;
        // }

        try {
            const response = await fetch(apiUrl, config());

            const responseJSON = await response.json();

            return responseJSON;

        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {

        try {
            const options = config();
            options.method = "POST",
                options.body = JSON.stringify(info);
            await fetch(apiUrl, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            const options = config();
            options.method = "DELETE";
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access,
                'Content-Type': 'application/json',
            }
        };
    }

    function handleError(err) {
        console.error(err);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        // add tokens later (tookens &&)
        loading: !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}

