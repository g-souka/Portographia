import { Query } from "@/data/query.class";
import { getAction, listAction } from "@/data/connection";


/**
 * Creates query to be sent to API.
 */
const createQuery = function(permalink)
{
	// Create main query
	let query = new Query(null, "date_ini ASC", "ContentPageNoticia", "noticias");
	
	query.id = permalink;

	query.return_fields = [
		"title_pt",
		"short_description_pt",
		"description_pt",
		"date_ini",
		"date_end",
		"image_obj",
		"photoset_obj",
		"permalink"
	].join(",");

	return query;
}

/**
 * Gets a article entry.
 */
export const getArticleEntry = function(query)
{
	return getAction(createQuery(query));
}

/**
 * Gets a list of articles.
 */
export const getArticlesList = function()
{
	return listAction(createQuery());
}

/**
 * Process data.
 */
const processData = function(data)
{
	let content = data;
	return content;
}