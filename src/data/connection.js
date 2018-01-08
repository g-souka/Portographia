import axios from "axios";


export const fusionTablesApi = axios.create({
	baseURL: "https://www.googleapis.com/fusiontables/v2/query",
	headers: {"Content-Type": "application/json"}
})

/**
 * Gets data from Google Fusion Tables API.
 */
export const fusionTables = function(query)
{
	const fusionTablesApiKey = "1nI0u4VCH5nlrUvDOvbxreveSXSEkrr7q-54abNJv";
	const fusionTableId = "AIzaSyD-BxZMiYcxowux8EGw6zDNTyPYmTgKM4o";
	
	return fusionTablesApi.get([`?sql=SELECT ${query} FROM ${fusionTablesApiKey}&key=${fusionTableId}`,].join(""));
}