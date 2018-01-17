/**
 * Object to be sent to API.
 */
export class Query
{
	id;
	length;
	order;
	content_page_type_permalink;
	return_fields;
	model_class_name;
	model_relation_name;
	content_page_type_relations;
	isHomepage;

	constructor(length, order, model_class_name, content_page_type_permalink)
	{
		// Initialization of the proprieties.
		this.return_fields = "";
		this.content_page_type_relations = [];
		this.model_relation_name = "";
		this.isHomepage = false;

		this.model_class_name = model_class_name || null
		this.length = length || null;
		this.order = order || null;
		this.content_page_type_permalink = content_page_type_permalink || null;
	}

	/**
	 * Adds an object to 'content_page_type_relations' array.
	 */
	contentPageTypeRelationsAddObject(queryObjRelation)
	{
		this.content_page_type_relations.push(queryObjRelation);
	}
}
