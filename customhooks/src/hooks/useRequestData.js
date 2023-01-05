import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url, path) {
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${url}${path}`)
            .then((response) => {
                setDados(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                // console.log(error.response.data);
                setErro(true)
            });
    }, []);
    return [dados, isLoading, erro]
}