

        // Function to save attendance data to local storage

        function saveAttendance() {

            var attendanceTable = document.getElementById("attendanceTable");

            var attendanceData = {};

            

            for (var i = 0; i < attendanceTable.rows.length; i++) {

                var row = attendanceTable.rows[i];

                var studentName = row.cells[0].innerText;

                var attendanceStatus = row.cells[1].querySelector("select").value;

                attendanceData[studentName] = attendanceStatus;

            }

            

            localStorage.setItem("attendanceData", JSON.stringify(attendanceData));

        }

        

        // Function to load attendance data from local storage

        function loadAttendance() {

            var attendanceTable = document.getElementById("attendanceTable");

            var attendanceData = JSON.parse(localStorage.getItem("attendanceData"));

            

            if (attendanceData) {

                for (var i = 0; i < attendanceTable.rows.length; i++) {

                    var row = attendanceTable.rows[i];

                    var studentName = row.cells[0].innerText;

                    var attendanceStatus = attendanceData[studentName];

                    

                    if (attendanceStatus) {

                        row.cells[1].querySelector("select").value = attendanceStatus;

                    }

                }

            }

        }
