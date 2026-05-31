import React, { useEffect } from 'react';
import { SEOMeta } from '../types';

interface SEOHeadProps extends SEOMeta {
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, schema, canonicalUrl }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Gachiakuta Manga`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add Canonical Tag
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Add Schema.org JSON-LD (supports single object or array of objects)
    if (schema) {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, i) => {
        const scriptSchema = document.createElement('script');
        scriptSchema.setAttribute('data-schema', String(i));
        scriptSchema.setAttribute('type', 'application/ld+json');
        scriptSchema.textContent = JSON.stringify(s);
        document.head.appendChild(scriptSchema);
      });
    }

  }, [title, description, schema, canonicalUrl]);

  return null;
};

export default SEOHead;