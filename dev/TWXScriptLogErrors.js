var serviceName = 'sendScriptLogErrors';
try {
    var newErrors = {
        "rows": [
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-28",
            "user": "azmuda",
            "content": "MKE_FS_UtilitiesT:getFault_partsGoodRatio - Error! on line --> 19 -- java.lang.IndexOutOfBoundsException: Index: 0, Size: 0",
            "timestamp": 1630108201056
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-40",
            "user": "azmuda",
            "content": "RockwellMES.DataProvider.MSC:GetCommonDailyYield - Error! on line --> 7 | error message: Cannot call method \"getMonth\" of undefined",
            "timestamp": 1630107332348
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-38",
            "user": "azmuda",
            "content": "RockwellMES.DataProvider.MSC:GetCommonDailyYield - Error! on line --> 7 | error message: Cannot call method \"getDate\" of undefined",
            "timestamp": 1630106384739
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-6",
            "user": "TWB_TWX_DISPLAY",
            "content": "CLS_DBProxy_T:materialConstraintsCensusStaffLvl_VALIDATE - Error! on line --> 19 | error message: java.lang.IndexOutOfBoundsException: Index: 0, Size: 0",
            "timestamp": 1630100669130
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-6",
            "user": "TWB_TWX_DISPLAY",
            "content": "CLS_DBProxy_T:supDispShiftReview_GET - Error! on line --> 72 | error message: java.lang.IndexOutOfBoundsException: Index: 0, Size: 0",
            "timestamp": 1630100669130
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-32",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMonitorOps - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022103754
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-39",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMonitorOps - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022101842
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-35",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMonitorTrackedObjectHistory - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022096841
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-14",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMSCMonitor - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022096750
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-45",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMSCMonitor - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022096732
          },
          {
            "instance": "",
            "level": "ERROR",
            "session": "",
            "origin": "S.c.t.d.e.DSLScript",
            "platformId": "",
            "thread": "https-openssl-apr-8443-exec-6",
            "user": "MKE_TWX_DISPLAY",
            "content": "RockwellMES.DataProvider.MSC:getMonitorOps - Error! on line --> 35 Error message: Cannot read property \"length\" from undefined",
            "timestamp": 1630022096732
          }
        ],
        "dataShape": {
          "fieldDefinitions": {
            "instance": {
              "name": "instance",
              "aspects": {},
              "description": "entity instance with the log entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "level": {
              "name": "level",
              "aspects": {},
              "description": "level of log entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "session": {
              "name": "session",
              "aspects": {},
              "description": "session associated with the log entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "origin": {
              "name": "origin",
              "aspects": {},
              "description": "origin of the log entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "platformId": {
              "name": "platformId",
              "aspects": {},
              "description": "identifier for the platform that logged the entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "thread": {
              "name": "thread",
              "aspects": {},
              "description": "thread that generated log entry",
              "baseType": "STRING",
              "ordinal": 0
            },
            "user": {
              "name": "user",
              "aspects": {},
              "description": "user that generated log entry",
              "baseType": "USERNAME",
              "ordinal": 0
            },
            "content": {
              "name": "content",
              "aspects": {},
              "description": "log message content",
              "baseType": "STRING",
              "ordinal": 0
            },
            "timestamp": {
              "name": "timestamp",
              "aspects": {},
              "description": "Time of log entry",
              "baseType": "DATETIME",
              "ordinal": 0
            }
          }
        }
      }
    // Logs["ScriptLog"].QueryLogEntries({
    //     maxItems: 9999,
    //     fromLogLevel: 'ERROR',
    //     oldestFirst: false,
    //     toLogLevel: 'ERROR',
    // });
    // console.log("new errors: " + JSON.stringify(newErrors));
    var newErrorCount = newErrors.rows.length;

        var existingErrors = {
            "rows": [
              {
                "DateAssigned": 1630026403000,
                "sourceType": "User",
                "Developer": "Sajid",
                "Error": "Test error that is resolved",
                "location": {
                  "elevation": 0,
                  "latitude": 0,
                  "longitude": 0
                },
                "Resolved": true,
                "source": "sajidpatel",
                "key": "Test error that is resolved",
                "tags": [],
                "timestamp": 1630026420755
              },
              {
                "DateAssigned": 1630026403000,
                "sourceType": "User",
                "Developer": "Sajid",
                "Error": "Test error that is not resolved",
                "location": {
                  "elevation": 0,
                  "latitude": 0,
                  "longitude": 0
                },
                "Resolved": false,
                "source": "sajidpatel",
                "key": "Test error that is not resolved",
                "tags": [],
                "timestamp": 1630026426526
              }
            ],
            "dataShape": {
              "fieldDefinitions": {
                "DateAssigned": {
                  "name": "DateAssigned",
                  "aspects": {
                    "isPrimaryKey": false
                  },
                  "description": "",
                  "baseType": "DATETIME",
                  "ordinal": 3
                },
                "sourceType": {
                  "name": "sourceType",
                  "aspects": {},
                  "description": "Source type",
                  "baseType": "STRING",
                  "ordinal": 0
                },
                "Developer": {
                  "name": "Developer",
                  "aspects": {
                    "isPrimaryKey": false
                  },
                  "description": "",
                  "baseType": "STRING",
                  "ordinal": 2
                },
                "Error": {
                  "name": "Error",
                  "aspects": {
                    "isPrimaryKey": true
                  },
                  "description": "",
                  "baseType": "STRING",
                  "ordinal": 1
                },
                "location": {
                  "name": "location",
                  "aspects": {},
                  "description": "Location of last modification",
                  "baseType": "LOCATION",
                  "ordinal": 0
                },
                "Resolved": {
                  "name": "Resolved",
                  "aspects": {
                    "isPrimaryKey": false
                  },
                  "description": "",
                  "baseType": "BOOLEAN",
                  "ordinal": 4
                },
                "source": {
                  "name": "source",
                  "aspects": {},
                  "description": "Source of last modification",
                  "baseType": "STRING",
                  "ordinal": 0
                },
                "key": {
                  "name": "key",
                  "aspects": {
                    "isPrimaryKey": true
                  },
                  "description": "Internal key value",
                  "baseType": "STRING",
                  "ordinal": 0
                },
                "tags": {
                  "name": "tags",
                  "aspects": {
                    "tagType": "DataTags"
                  },
                  "description": "Tags",
                  "baseType": "TAGS",
                  "ordinal": 0
                },
                "timestamp": {
                  "name": "timestamp",
                  "aspects": {},
                  "description": "Time of last modification",
                  "baseType": "DATETIME",
                  "ordinal": 0
                }
              }
            }
          };
        // Things["LogErrors_DT"].GetDataTableEntries({
        //     maxItems: 9999
        // });
        var existingErrorCount = existingErrors.rows.length;

        if(newErrorCount === 0) {
            for (var x = existingErrorCount - 1; x >= 0; x--) {
        var error = existingErrors.rows[x];

        var entry = {};
        entry.key = error.Error;
        entry.Error = error.Error;
        entry.Resolved = true;
        // entry.Developer
        // entry.DateAssigned 

        logger.warn(me.name + ":" + serviceName + " - marking the error --> " + error.Error + " as resolved.");
        Things["LogErrors_DT"].UpdateDataTableEntry({
            sourceType: undefined /* STRING */,
            values: entry /* INFOTABLE */,
            location: undefined /* LOCATION */,
            source: undefined /* STRING */,
            tags: undefined /* TAGS */
        });
    }

    //        var id =  Things["LogErrors_DT"].AddOrUpdateDataTableEntry({
    //            sourceType: undefined /* STRING */,
    //            values: undefined /* INFOTABLE */,
    //            location: undefined /* LOCATION */,
    //            source: undefined /* STRING */,
    //            tags: undefined /* TAGS */
    //        }); 
    //        Things["LogErrors_DT"].UpdateDataTableEntry({
    //            sourceType: undefined /* STRING */,
    //            values: undefined /* INFOTABLE */,
    //            location: undefined /* LOCATION */,
    //            source: undefined /* STRING */,
    //            tags: undefined /* TAGS */
    //        });
}

    //    logger.warn("SSP - errorCount - " + errorCount);
    //    for (var x = existingErrorCount - 1; x >= 0; x--) {
    //        var error = existingErrors.rows[x];
    //        logger.warn("SSP - " + error);
    //        finalList.AddRow(error);
    //    }
    //
    //
    //    logger.warn("SSP - newErrorCount - " + newErrorCount);
    //    for (var y = newErrorCount - 1; y >= 0; y--) {
    //        var newError = errors.rows[y];
    //        logger.warn("SSP - " + newError);
    //
    //        var newEntry = new Object();
    //        newEntry.Error = newError.content;
    //        var found = existingErrors.Find(newEntry);
    //        logger.warn("SSP - found - " + found);
    //
    //        if (!found) {
    //        }
    //    }


    //    var params = {
    //        t: errors,
    //        columns: 'content'
    //    };
    //
    //    result = Resources["InfoTableFunctions"].Distinct(params);

    //    var newField = new Object();
    //    newField.name = 'dev';
    //    newField.baseType = 'STRING';
    //    result.AddField(newField);
    //
    //    var developers = ["Sajid","Gabriel","Anna","Sebastian","Pawel","Doug","Gul","Vinshi","Michal"];

    // Construct HTML message for EMAIL    
    //    var thBlock = '<th style="border: 1px solid black;text-align:center;">' ;
    //    var tdBlock = '</td> <td style="border: 1px solid black;text-align:center;">';
    //    var message = 'Hello ' + 'Team, please help clear the ' + '<span style="color:red;"><strong>' + result.length + '</strong></span> errors below. (OBS: Errors are randomly assigned).';
    //    message = message + '<table style="border: 1px solid black;margin-left:auto;margin-right:auto;border-collapse: collapse;"> <thead> <tr> ';
    //    message = message + thBlock + 'Content' + thBlock + 'DEV' + '</th></tr> </thead> <tbody>';
    //    for (var x=0; x < result.rows.length; x++) {
    //        var row = result.rows[x];
    //        row.dev = developers[Math.floor(Math.random() * developers.length)];
    //        message = message + '<tr> <td style="border: 1px solid black;text-align:left;">';
    //        message = message + row.content + tdBlock;
    //        message = message + row.dev + "</td> </tr>";
    //        message = message + "</tbody>";
    //    }

    //    var Env = Things["RA_Environment_T"].IsProdEnv === false ? 'QA' : 'PROD'; 
    //
    //    Things["Global_Thing_MAILSERVER"].SendMessage({
    //        subject: 'Script Log Errors - ' + Env,
    //        from: "Script Log Errors <gmotta@rockwellautomation.com>",
    //        to: 'sspatel@ra.rockwell.com;',
    //        //to: 'sspatel@ra.rockwell.com; pmagda@ra.rockwell.com; gmotta@ra.rockwell.com; dfgodard@ra.rockwell.com; gulafshan.tanweer@ra.rockwell.com; schwast@ra.rockwell.com; azmuda@ra.rockwell.com; vinshi.singh@rockwellautomation.com; vandatmichal.nguyen@rockwellautomation.com',
    //        body: message
    //    });
    //    result = message;
} catch (Err) {
    logger.error(me.name + ":" + serviceName + " - Error! on line --> " + Err.lineNumber + " | error message: " + Err.message);
}
