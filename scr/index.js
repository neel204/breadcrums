import React from "react";
import "tailwindcss/tailwind.css";

const Breadcrumb = ({
  items,
  disableHome = false,
  changeDefaultColor = "text-blue-700",
  changeActivityColor,
  changeDefaultIcon,
  needSchema,
  schemaItemProp,
  schemaItemType,
  needEllipsisIfLong,
  ellipsisLength,
  fontBold,
  activeItemBold,
}) => {
  function addEllipsisIfLong(
    title,
    maxLength = ellipsisLength ? ellipsisLength : 25
  ) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  }

  return (
    <ol className="breadcrumb-list gap-1 items-center text-base capitalize hidden md:flex">
      {!disableHome && (
        <li
          key="Home"
          className={`breadcrumb-list-item text-sm text-blue-700`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <a
            href="/"
            title="Home"
            itemProp="item"
            itemScope
            itemType="http://schema.org/Thing"
          >
            Home
          </a>
        </li>
      )}
      <span className={`breadcrumb-separator text-gray-700 text-sm`}>›</span>
      {items.map((item, index) =>
        item.title ? (
          <li
            key={item.title}
            className={`breadcrumb-list-item text-sm ${
              item.colorDisable ? "text-gray-500 " : "text-blue-700"
            }`}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            {item.link ? (
              <a
                href={item.link}
                title={item.title}
                itemProp="item"
                itemScope
                itemType="http://schema.org/Thing"
              >
                {addEllipsisIfLong(item?.title)}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator ml-1 text-gray-700 text-sm">
                ›
              </span>
            )}
          </li>
        ) : null
      )}
    </ol>
  );
};

export default Breadcrumb;

{
  /*


items,
  disableHome = false,
  changeDefaultColor = "text-blue-700",
  changeActivityColor = "text-gray-700",
  changeDefaultIcon = ›,
  needSchema = true,
  schemaItemProp = "ListItem" ,
  schemaItemType = "Thing",
  needEllipsisIfLong = true,
  ellipsisLength = 25,
  fontBold = , not need
  activeItemBold = false,
   
Title : Breadcrumb with SEO

Description: 
  This breadcrumb package seamlessly integrates with search engine optimization 
  (SEO) strategies through structured schema implementation. By leveraging 
  schema markup, it enhances a website's technical configuration, content 
  relevance, and link popularity, resulting in improved visibility and 
  accessibility in search engine results.

  SEO Benefits: Breadcrumbs provided by this package not only enhance user 
  experience by offering clear navigation paths but also deliver substantial 
  SEO advantages. Search engines like Google utilize breadcrumbs, along with 
  schema markup, to better comprehend website structures. This comprehensive 
  understanding leads to enhanced indexing, increased visibility in search results, 
  and improved rankings. Additionally, breadcrumbs aided by schema markup assist 
  users and search engines in identifying page relationships, contributing to a 
  more organized and accessible website.

  Installation :
  npm install breadcrumbs-seo

  Usage : first you need to create a breadcrumbItems array which will content a 
          object of each route and in the object it will content title, link, and 
          colorDisable and title and link be dynamite

          Eg: 
           const breadcrumbItems = [
              {
                title: "Home", 
                link : "/", 
                colorDisable: false},
              {
                title: "Videos", 
                link : "/videos", 
                colorDisable: false
              },
              {
                title: "(eg :video title - Create Html file on the vs code for the first time)", 
                link : "/videoId", 
                colorDisable: false
              },
            ]

          and in any component you want to use the you have to import the Package 
          use it like this
            <>
              <BreadcrumbSeo items={breadcrumbItems}/>
            </>
          
          so output will look something like this 

          Output : 
          Home > Video > Create Html file on the vs code for the first time

          and if any of the title from the object length is longer then 25 then it 
          will truncate it, if the video title is something like this "Create Html 
          file on the vs code for the first time", so output will look something 
          like this

          Output : 
          Home > Video > Create Html file on the v...

          if you don't want to truncate the title then use this "needEllipsisIfLong = false" //-- change this key to doNotEllipsis -- //
          and default value of the "needEllipsisIfLong = true or if you want to 
          change the ellipsis length then use this "ellipsisLength : 50", default 
          value is 25

 */
}
