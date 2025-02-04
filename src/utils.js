/////////////////////////////////////////////////////////////////////////////////////////////
// Copyright 2022 Garmin International, Inc.
// Licensed under the Flexible and Interoperable Data Transfer (FIT) Protocol License; you
// may not use this file except in compliance with the Flexible and Interoperable Data
// Transfer (FIT) Protocol License.
/////////////////////////////////////////////////////////////////////////////////////////////
// ****WARNING****  This file is auto-generated!  Do NOT edit this file.
// Profile Version = 21.94Release
// Tag = production/akw/21.94.00-0-g0f668193
/////////////////////////////////////////////////////////////////////////////////////////////


/**
 * The millisecond offset between UNIX and FIT Epochs (631065600000).
 * @const {number}
 */
const FIT_EPOCH_MS = 631065600000;

/**
 * Convert a FIT DateTime to a JavaScript Date
 * @param {number} datetime - Seconds since FIT EPOCH
 * @returns {Date} A JavaScript Date object
 */
const convertDateTimeToDate = (datetime) => {
    return new Date((datetime ?? 0) * 1000 + FIT_EPOCH_MS);
};

export default {
    FIT_EPOCH_MS,
    convertDateTimeToDate,
};
