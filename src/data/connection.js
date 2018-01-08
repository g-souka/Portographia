import axios from "axios";

const developmentUrl = "http://localhost:4000/pt/content_pages/";
const productionUrl = "http://api.osscm.diogoterremoto.xyz/pt/content_pages/";

export const API = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? developmentUrl : productionUrl,
	method: "post",
	headers: {"Content-Type": "application/json"}
})

/**
 * Gets a entry.
 */
export const getAction = function(query)
{
	return API.post(`/get`, query);
}

/**
 * Gets a list (of entries).
 */
export const listAction = function(query, contentPageType)
{
	return API.post(contentPageType ? `/${contentPageType}` : "/list_front", query);
}

/**
 * Gets an entry or list.
 */
export const customAction = function(action)
{
	return API.post(`/${action}`);
}



