module.exports = {
    'doctype-first': true,                  /* Require Doctype first.. */
    'doctype-html5': false,                 /* If enabled, this would require the Doctype to be html5 */
    'head-script-disabled': false,          /* If enabled, this would disallow the `<script>` in `<head>`. */
    'style-disabled': true,                 /* Disallow `<style>` tag. */
    'title-require': true,                  /* `<title>` must be present in `<head>` tags. */
    'attr-lowercase': true,                 /* Require attribute name to be lowercase. */
    'attr-no-duplication': true,            /* Disallow specifying the same attribute twice. */
    'attr-no-unnecessary-whitespace': true, /* Disallow spaces between attribute names and values. */
    'attr-no-unsafe-chars': true,           /* Disallow attribute values with unsafe characters. */
    'attr-value-double-quotes': true,       /* Require attribute value to be enclosed in double quotes. */
    'attr-value-not-empty': false,          /* If enabled, this would disallow empty attributes. */
    'alt-require': true,                    /* Require alt attribute for images. */
    'tag-pair': true,                       /* Require tags to be paired. */
    'tag-self-close': false,                /* If enabled, this would require tags without content to self-close. */
    'tagname-lowercase': true,              /* Require tag names to be lowercase. */
    'empty-tag-not-self-closed': false,     /* If enabled, this would enforce that empty tags do not self-close. */
    'src-not-empty': false,                 /* If enabled, this would require that the source of an image, script, or link tag not be empty. */
    'href-abs-or-rel': false,               /* If enabled, this would require that href be absolute or relative. */
    'id-class-ad-disabled': true,           /* Disallow use of the ad keyword, which is blocked by default by many adblock browser extensions. */
    'id-class-value': 'dash',               /* Require dashes in id and class names. */
    'id-unique': true,                      /* Require id attributes to be  unique. */
    'inline-script-disabled': true,         /* Disallow use of inline scripts. */
    'inline-style-disabled': true,          /* Disallow use of inline style. */
    'space-tab-mixed-disabled': 'tab',      /* Require that indentation uses tabs. */
    'spec-char-escape': true,               /* Require that special characters are escaped. */
};
