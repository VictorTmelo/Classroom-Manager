# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import service_classroomManager_pb2 as service__classroomManager__pb2


class classroomManagerStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.addProfessor = channel.unary_unary(
                '/classroomManager/addProfessor',
                request_serializer=service__classroomManager__pb2.addProfessorRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.updateProfessor = channel.unary_unary(
                '/classroomManager/updateProfessor',
                request_serializer=service__classroomManager__pb2.updateNameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.deleteProfessor = channel.unary_unary(
                '/classroomManager/deleteProfessor',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.getProfessor = channel.unary_unary(
                '/classroomManager/getProfessor',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.professorResponse.FromString,
                )
        self.getProfessors = channel.unary_unary(
                '/classroomManager/getProfessors',
                request_serializer=service__classroomManager__pb2.Empty.SerializeToString,
                response_deserializer=service__classroomManager__pb2.professorsGenericResponse.FromString,
                )
        self.getProfessorsFromCourse = channel.unary_unary(
                '/classroomManager/getProfessorsFromCourse',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.professorsGenericResponse.FromString,
                )
        self.addCourse = channel.unary_unary(
                '/classroomManager/addCourse',
                request_serializer=service__classroomManager__pb2.addCourseRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.updateCourse = channel.unary_unary(
                '/classroomManager/updateCourse',
                request_serializer=service__classroomManager__pb2.updateNameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.deleteCourse = channel.unary_unary(
                '/classroomManager/deleteCourse',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.getCourse = channel.unary_unary(
                '/classroomManager/getCourse',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.courseResponse.FromString,
                )
        self.getCourses = channel.unary_unary(
                '/classroomManager/getCourses',
                request_serializer=service__classroomManager__pb2.Empty.SerializeToString,
                response_deserializer=service__classroomManager__pb2.coursesGenericResponse.FromString,
                )
        self.getCoursesFromProfessor = channel.unary_unary(
                '/classroomManager/getCoursesFromProfessor',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.coursesGenericResponse.FromString,
                )
        self.getCoursesFromStudent = channel.unary_unary(
                '/classroomManager/getCoursesFromStudent',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.coursesGenericResponse.FromString,
                )
        self.addStudent = channel.unary_unary(
                '/classroomManager/addStudent',
                request_serializer=service__classroomManager__pb2.addStudentRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.updateStudent = channel.unary_unary(
                '/classroomManager/updateStudent',
                request_serializer=service__classroomManager__pb2.updateNameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.deleteStudent = channel.unary_unary(
                '/classroomManager/deleteStudent',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.GenericResponse.FromString,
                )
        self.getStudent = channel.unary_unary(
                '/classroomManager/getStudent',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.studentResponse.FromString,
                )
        self.getStudents = channel.unary_unary(
                '/classroomManager/getStudents',
                request_serializer=service__classroomManager__pb2.Empty.SerializeToString,
                response_deserializer=service__classroomManager__pb2.studentsGenericResponse.FromString,
                )
        self.getStudentsFromCourse = channel.unary_unary(
                '/classroomManager/getStudentsFromCourse',
                request_serializer=service__classroomManager__pb2.nameRequest.SerializeToString,
                response_deserializer=service__classroomManager__pb2.studentsGenericResponse.FromString,
                )


class classroomManagerServicer(object):
    """Missing associated documentation comment in .proto file."""

    def addProfessor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def updateProfessor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def deleteProfessor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getProfessor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getProfessors(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getProfessorsFromCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def addCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def updateCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def deleteCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getCourses(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getCoursesFromProfessor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getCoursesFromStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def addStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def updateStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def deleteStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getStudents(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getStudentsFromCourse(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_classroomManagerServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'addProfessor': grpc.unary_unary_rpc_method_handler(
                    servicer.addProfessor,
                    request_deserializer=service__classroomManager__pb2.addProfessorRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'updateProfessor': grpc.unary_unary_rpc_method_handler(
                    servicer.updateProfessor,
                    request_deserializer=service__classroomManager__pb2.updateNameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'deleteProfessor': grpc.unary_unary_rpc_method_handler(
                    servicer.deleteProfessor,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'getProfessor': grpc.unary_unary_rpc_method_handler(
                    servicer.getProfessor,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.professorResponse.SerializeToString,
            ),
            'getProfessors': grpc.unary_unary_rpc_method_handler(
                    servicer.getProfessors,
                    request_deserializer=service__classroomManager__pb2.Empty.FromString,
                    response_serializer=service__classroomManager__pb2.professorsGenericResponse.SerializeToString,
            ),
            'getProfessorsFromCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.getProfessorsFromCourse,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.professorsGenericResponse.SerializeToString,
            ),
            'addCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.addCourse,
                    request_deserializer=service__classroomManager__pb2.addCourseRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'updateCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.updateCourse,
                    request_deserializer=service__classroomManager__pb2.updateNameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'deleteCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.deleteCourse,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'getCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.getCourse,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.courseResponse.SerializeToString,
            ),
            'getCourses': grpc.unary_unary_rpc_method_handler(
                    servicer.getCourses,
                    request_deserializer=service__classroomManager__pb2.Empty.FromString,
                    response_serializer=service__classroomManager__pb2.coursesGenericResponse.SerializeToString,
            ),
            'getCoursesFromProfessor': grpc.unary_unary_rpc_method_handler(
                    servicer.getCoursesFromProfessor,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.coursesGenericResponse.SerializeToString,
            ),
            'getCoursesFromStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.getCoursesFromStudent,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.coursesGenericResponse.SerializeToString,
            ),
            'addStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.addStudent,
                    request_deserializer=service__classroomManager__pb2.addStudentRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'updateStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.updateStudent,
                    request_deserializer=service__classroomManager__pb2.updateNameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'deleteStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.deleteStudent,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.GenericResponse.SerializeToString,
            ),
            'getStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.getStudent,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.studentResponse.SerializeToString,
            ),
            'getStudents': grpc.unary_unary_rpc_method_handler(
                    servicer.getStudents,
                    request_deserializer=service__classroomManager__pb2.Empty.FromString,
                    response_serializer=service__classroomManager__pb2.studentsGenericResponse.SerializeToString,
            ),
            'getStudentsFromCourse': grpc.unary_unary_rpc_method_handler(
                    servicer.getStudentsFromCourse,
                    request_deserializer=service__classroomManager__pb2.nameRequest.FromString,
                    response_serializer=service__classroomManager__pb2.studentsGenericResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'classroomManager', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class classroomManager(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def addProfessor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/addProfessor',
            service__classroomManager__pb2.addProfessorRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def updateProfessor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/updateProfessor',
            service__classroomManager__pb2.updateNameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def deleteProfessor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/deleteProfessor',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getProfessor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getProfessor',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.professorResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getProfessors(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getProfessors',
            service__classroomManager__pb2.Empty.SerializeToString,
            service__classroomManager__pb2.professorsGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getProfessorsFromCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getProfessorsFromCourse',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.professorsGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def addCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/addCourse',
            service__classroomManager__pb2.addCourseRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def updateCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/updateCourse',
            service__classroomManager__pb2.updateNameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def deleteCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/deleteCourse',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getCourse',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.courseResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getCourses(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getCourses',
            service__classroomManager__pb2.Empty.SerializeToString,
            service__classroomManager__pb2.coursesGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getCoursesFromProfessor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getCoursesFromProfessor',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.coursesGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getCoursesFromStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getCoursesFromStudent',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.coursesGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def addStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/addStudent',
            service__classroomManager__pb2.addStudentRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def updateStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/updateStudent',
            service__classroomManager__pb2.updateNameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def deleteStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/deleteStudent',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.GenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getStudent',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.studentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getStudents(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getStudents',
            service__classroomManager__pb2.Empty.SerializeToString,
            service__classroomManager__pb2.studentsGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getStudentsFromCourse(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/classroomManager/getStudentsFromCourse',
            service__classroomManager__pb2.nameRequest.SerializeToString,
            service__classroomManager__pb2.studentsGenericResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
