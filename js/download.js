"use strict";

/**
 * Provides export functionality for browser download.
 *
 * @author Andreas Rümpel <ruempel@gmail.com>
 */
export default class Download {
    /**
     * Provides the given string as a file download.
     *
     * @param {string} payload string to download as a file
     */
    static downloadFile(payload) {
        const limit = 120; // maximum line length
        let chunkedPayload = "";
        for (let i = 0; i < payload.length; i += limit) {
            chunkedPayload += payload.substr(i, limit) + "%0A"; // add line breaks
        }

        const downloadURI = "data:text/plain;charset=utf-8," + chunkedPayload;
        const blindAnchor = jQuery("<a/>").attr({
            href: downloadURI,
            download: "download",
            hidden: "hidden"
        }).appendTo(jQuery("body"));
        blindAnchor[0].click();
        blindAnchor.remove();
    }
}
