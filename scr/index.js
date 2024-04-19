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
  changeActivityColor,
  changeDefaultIcon,
  needSchema,
  schemaItemProp,
  schemaItemType,
  needEllipsisIfLong,
  ellipsisLength,
  fontBold,
  activeItemBold,
  

  1. Items: 
        which will be send to the package and item will content a list of breadcrumbs which you want to render. For eg
      const breadcrumbItems = [
        {title: "", link : "", colorDisable: },
        {title: "", link : "", colorDisable: },
        {title: "", link : "", colorDisable: },
      ]
        
      In title 

      



 Title and Description

  Title : Breadcrumb with SEO

  Description : This breadcrumb package come with inbuild SEO with help of schema 
                which will help you website to improves a website's technical 
                configuration, content relevance, and link popularity so that its 
                pages are easier to find, more relevant, and more popular in search 
                results.

  Installation :
  npm install breadcrumbs-seo -f

  Usage : first need to create a breadcrumbItems array which will content a object 
          of each route and in the object it will content title, link, and 
          colorDisable 

          Eg: 
           const breadcrumbItems = [
              {title: "Home", link : "/", colorDisable: },
              {title: "Videos", link : "/videos", colorDisable: },
              {title: "(eg :video title - Create Html)", link : "/videoId", colorDisable: },
            ]

          and in any component you want to use the you have to import the Package use like this    
            <>
              <BreadcrumbSeo items={breadcrumbItems}/>
            </>
          
          so output will look something like this 

          Output : 
          Home > Video > Create Html 

          and if any of the title length is longer then 25 then it will truncate it, if the 
          video title is something like this "Create Html file on the vs code for the first time", 
          so output will look something like this

          Output : 
          Home > Video > Create Html file on the v...


 */
}
