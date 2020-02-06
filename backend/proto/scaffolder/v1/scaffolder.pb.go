// Code generated by protoc-gen-go. DO NOT EDIT.
// source: scaffolder/v1/scaffolder.proto

package scaffolderv1

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	_struct "github.com/golang/protobuf/ptypes/struct"
	v1 "github.com/spotify/backstage/backend/proto/identity/v1"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Empty struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Empty) Reset()         { *m = Empty{} }
func (m *Empty) String() string { return proto.CompactTextString(m) }
func (*Empty) ProtoMessage()    {}
func (*Empty) Descriptor() ([]byte, []int) {
	return fileDescriptor_6737326b433dc57d, []int{0}
}

func (m *Empty) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Empty.Unmarshal(m, b)
}
func (m *Empty) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Empty.Marshal(b, m, deterministic)
}
func (m *Empty) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Empty.Merge(m, src)
}
func (m *Empty) XXX_Size() int {
	return xxx_messageInfo_Empty.Size(m)
}
func (m *Empty) XXX_DiscardUnknown() {
	xxx_messageInfo_Empty.DiscardUnknown(m)
}

var xxx_messageInfo_Empty proto.InternalMessageInfo

type ListTemplatesReply struct {
	Templates            []*Template `protobuf:"bytes,1,rep,name=templates,proto3" json:"templates,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *ListTemplatesReply) Reset()         { *m = ListTemplatesReply{} }
func (m *ListTemplatesReply) String() string { return proto.CompactTextString(m) }
func (*ListTemplatesReply) ProtoMessage()    {}
func (*ListTemplatesReply) Descriptor() ([]byte, []int) {
	return fileDescriptor_6737326b433dc57d, []int{1}
}

func (m *ListTemplatesReply) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListTemplatesReply.Unmarshal(m, b)
}
func (m *ListTemplatesReply) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListTemplatesReply.Marshal(b, m, deterministic)
}
func (m *ListTemplatesReply) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListTemplatesReply.Merge(m, src)
}
func (m *ListTemplatesReply) XXX_Size() int {
	return xxx_messageInfo_ListTemplatesReply.Size(m)
}
func (m *ListTemplatesReply) XXX_DiscardUnknown() {
	xxx_messageInfo_ListTemplatesReply.DiscardUnknown(m)
}

var xxx_messageInfo_ListTemplatesReply proto.InternalMessageInfo

func (m *ListTemplatesReply) GetTemplates() []*Template {
	if m != nil {
		return m.Templates
	}
	return nil
}

type CreateReply struct {
	ComponentId          string   `protobuf:"bytes,1,opt,name=component_id,json=componentId,proto3" json:"component_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateReply) Reset()         { *m = CreateReply{} }
func (m *CreateReply) String() string { return proto.CompactTextString(m) }
func (*CreateReply) ProtoMessage()    {}
func (*CreateReply) Descriptor() ([]byte, []int) {
	return fileDescriptor_6737326b433dc57d, []int{2}
}

func (m *CreateReply) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateReply.Unmarshal(m, b)
}
func (m *CreateReply) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateReply.Marshal(b, m, deterministic)
}
func (m *CreateReply) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateReply.Merge(m, src)
}
func (m *CreateReply) XXX_Size() int {
	return xxx_messageInfo_CreateReply.Size(m)
}
func (m *CreateReply) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateReply.DiscardUnknown(m)
}

var xxx_messageInfo_CreateReply proto.InternalMessageInfo

func (m *CreateReply) GetComponentId() string {
	if m != nil {
		return m.ComponentId
	}
	return ""
}

type CreateRequest struct {
	TemplateId  string `protobuf:"bytes,1,opt,name=template_id,json=templateId,proto3" json:"template_id,omitempty"`
	Org         string `protobuf:"bytes,2,opt,name=org,proto3" json:"org,omitempty"`
	ComponentId string `protobuf:"bytes,3,opt,name=component_id,json=componentId,proto3" json:"component_id,omitempty"`
	Private     bool   `protobuf:"varint,4,opt,name=private,proto3" json:"private,omitempty"`
	// here's the cookiecutter.json that is used for the request.
	// make as a struct so that we can pass through the data in a nice way
	// withouth having to mess around with stuff and special types.
	Metadata             *_struct.Struct `protobuf:"bytes,5,opt,name=metadata,proto3" json:"metadata,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *CreateRequest) Reset()         { *m = CreateRequest{} }
func (m *CreateRequest) String() string { return proto.CompactTextString(m) }
func (*CreateRequest) ProtoMessage()    {}
func (*CreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6737326b433dc57d, []int{3}
}

func (m *CreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateRequest.Unmarshal(m, b)
}
func (m *CreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateRequest.Marshal(b, m, deterministic)
}
func (m *CreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateRequest.Merge(m, src)
}
func (m *CreateRequest) XXX_Size() int {
	return xxx_messageInfo_CreateRequest.Size(m)
}
func (m *CreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateRequest proto.InternalMessageInfo

func (m *CreateRequest) GetTemplateId() string {
	if m != nil {
		return m.TemplateId
	}
	return ""
}

func (m *CreateRequest) GetOrg() string {
	if m != nil {
		return m.Org
	}
	return ""
}

func (m *CreateRequest) GetComponentId() string {
	if m != nil {
		return m.ComponentId
	}
	return ""
}

func (m *CreateRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

func (m *CreateRequest) GetMetadata() *_struct.Struct {
	if m != nil {
		return m.Metadata
	}
	return nil
}

type Template struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description          string   `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	User                 *v1.User `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Template) Reset()         { *m = Template{} }
func (m *Template) String() string { return proto.CompactTextString(m) }
func (*Template) ProtoMessage()    {}
func (*Template) Descriptor() ([]byte, []int) {
	return fileDescriptor_6737326b433dc57d, []int{4}
}

func (m *Template) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Template.Unmarshal(m, b)
}
func (m *Template) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Template.Marshal(b, m, deterministic)
}
func (m *Template) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Template.Merge(m, src)
}
func (m *Template) XXX_Size() int {
	return xxx_messageInfo_Template.Size(m)
}
func (m *Template) XXX_DiscardUnknown() {
	xxx_messageInfo_Template.DiscardUnknown(m)
}

var xxx_messageInfo_Template proto.InternalMessageInfo

func (m *Template) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Template) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Template) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Template) GetUser() *v1.User {
	if m != nil {
		return m.User
	}
	return nil
}

func init() {
	proto.RegisterType((*Empty)(nil), "spotify.backstage.scaffolder.v1.Empty")
	proto.RegisterType((*ListTemplatesReply)(nil), "spotify.backstage.scaffolder.v1.ListTemplatesReply")
	proto.RegisterType((*CreateReply)(nil), "spotify.backstage.scaffolder.v1.CreateReply")
	proto.RegisterType((*CreateRequest)(nil), "spotify.backstage.scaffolder.v1.CreateRequest")
	proto.RegisterType((*Template)(nil), "spotify.backstage.scaffolder.v1.Template")
}

func init() { proto.RegisterFile("scaffolder/v1/scaffolder.proto", fileDescriptor_6737326b433dc57d) }

var fileDescriptor_6737326b433dc57d = []byte{
	// 411 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x52, 0xd1, 0x8a, 0xd3, 0x40,
	0x14, 0x25, 0x6d, 0x77, 0xb7, 0x7b, 0xb3, 0xbb, 0xc8, 0xbc, 0x18, 0x82, 0xb8, 0x31, 0x82, 0x54,
	0x90, 0xa9, 0x6d, 0x1f, 0x7c, 0x57, 0x44, 0x16, 0x7c, 0xca, 0xea, 0x8b, 0x20, 0x32, 0x4d, 0x6e,
	0xca, 0x60, 0x92, 0x19, 0x67, 0x6e, 0x03, 0xf9, 0x04, 0xff, 0xc7, 0x2f, 0xf2, 0x4b, 0xa4, 0x53,
	0x27, 0xdd, 0x65, 0x0b, 0xd9, 0xb7, 0x7b, 0xcf, 0xbd, 0xe7, 0xce, 0xe1, 0x9c, 0x81, 0xe7, 0x36,
	0x17, 0x65, 0xa9, 0xaa, 0x02, 0xcd, 0xbc, 0x5d, 0xcc, 0x0f, 0x1d, 0xd7, 0x46, 0x91, 0x62, 0xd7,
	0x56, 0x2b, 0x92, 0x65, 0xc7, 0xd7, 0x22, 0xff, 0x69, 0x49, 0x6c, 0x90, 0xdf, 0xd9, 0x69, 0x17,
	0x71, 0x2c, 0x0b, 0x6c, 0x48, 0x52, 0xb7, 0xa3, 0xfb, 0x7a, 0x4f, 0x8e, 0x9f, 0x6d, 0x94, 0xda,
	0x54, 0x38, 0x77, 0xdd, 0x7a, 0x5b, 0xce, 0x2d, 0x99, 0x6d, 0x4e, 0xfb, 0x69, 0x7a, 0x06, 0x27,
	0x1f, 0x6b, 0x4d, 0x5d, 0xfa, 0x1d, 0xd8, 0x67, 0x69, 0xe9, 0x0b, 0xd6, 0xba, 0x12, 0x84, 0x36,
	0x43, 0x5d, 0x75, 0xec, 0x13, 0x9c, 0x93, 0x47, 0xa2, 0x20, 0x19, 0xcf, 0xc2, 0xe5, 0x6b, 0x3e,
	0xa0, 0x86, 0xfb, 0x1b, 0xd9, 0x81, 0x9b, 0xbe, 0x85, 0xf0, 0x83, 0xc1, 0x1d, 0xe8, 0xee, 0xbe,
	0x80, 0x8b, 0x5c, 0xd5, 0x5a, 0x35, 0xd8, 0xd0, 0x0f, 0x59, 0x44, 0x41, 0x12, 0xcc, 0xce, 0xb3,
	0xb0, 0xc7, 0x6e, 0x8a, 0xf4, 0x4f, 0x00, 0x97, 0x9e, 0xf2, 0x6b, 0x8b, 0x96, 0xd8, 0x35, 0x84,
	0xfe, 0xe0, 0x81, 0x03, 0x1e, 0xba, 0x29, 0xd8, 0x13, 0x18, 0x2b, 0xb3, 0x89, 0x46, 0x6e, 0xb0,
	0x2b, 0x1f, 0xbc, 0x33, 0x7e, 0xf0, 0x0e, 0x8b, 0xe0, 0x4c, 0x1b, 0xd9, 0x0a, 0xc2, 0x68, 0x92,
	0x04, 0xb3, 0x69, 0xe6, 0x5b, 0xb6, 0x82, 0x69, 0x8d, 0x24, 0x0a, 0x41, 0x22, 0x3a, 0x49, 0x82,
	0x59, 0xb8, 0x7c, 0xca, 0xf7, 0x66, 0x72, 0x6f, 0x26, 0xbf, 0x75, 0x66, 0x66, 0xfd, 0x62, 0xfa,
	0x3b, 0x80, 0xa9, 0x37, 0x80, 0x5d, 0xc1, 0xa8, 0x17, 0x3a, 0x92, 0x05, 0x63, 0x30, 0x69, 0x44,
	0x8d, 0xff, 0x15, 0xba, 0x9a, 0x25, 0x10, 0x16, 0x68, 0x73, 0x23, 0x35, 0x49, 0xd5, 0x78, 0x85,
	0x77, 0x20, 0xf6, 0x0e, 0x26, 0x5b, 0x8b, 0xc6, 0xc9, 0x0b, 0x97, 0x2f, 0x8f, 0xf8, 0xdf, 0x47,
	0xde, 0x2e, 0xf8, 0x57, 0x8b, 0x26, 0x73, 0x84, 0xe5, 0xdf, 0x00, 0xe0, 0xb6, 0x8f, 0x86, 0x55,
	0x70, 0x79, 0x2f, 0x62, 0xf6, 0x6a, 0x30, 0x4a, 0xf7, 0x37, 0xe2, 0xd5, 0xe0, 0xde, 0x91, 0xaf,
	0x53, 0xc2, 0xe9, 0x3e, 0x3e, 0xc6, 0x07, 0xe9, 0xf7, 0x72, 0x8e, 0xdf, 0x3c, 0x7a, 0x5f, 0x57,
	0xdd, 0xfb, 0xab, 0x6f, 0x17, 0x87, 0x61, 0xbb, 0x58, 0x9f, 0xba, 0x6c, 0x56, 0xff, 0x02, 0x00,
	0x00, 0xff, 0xff, 0xfc, 0x1f, 0xfc, 0xf0, 0x55, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// ScaffolderClient is the client API for Scaffolder service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ScaffolderClient interface {
	ListTemplates(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*ListTemplatesReply, error)
	Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*CreateReply, error)
}

type scaffolderClient struct {
	cc grpc.ClientConnInterface
}

func NewScaffolderClient(cc grpc.ClientConnInterface) ScaffolderClient {
	return &scaffolderClient{cc}
}

func (c *scaffolderClient) ListTemplates(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*ListTemplatesReply, error) {
	out := new(ListTemplatesReply)
	err := c.cc.Invoke(ctx, "/spotify.backstage.scaffolder.v1.Scaffolder/ListTemplates", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *scaffolderClient) Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*CreateReply, error) {
	out := new(CreateReply)
	err := c.cc.Invoke(ctx, "/spotify.backstage.scaffolder.v1.Scaffolder/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ScaffolderServer is the server API for Scaffolder service.
type ScaffolderServer interface {
	ListTemplates(context.Context, *Empty) (*ListTemplatesReply, error)
	Create(context.Context, *CreateRequest) (*CreateReply, error)
}

// UnimplementedScaffolderServer can be embedded to have forward compatible implementations.
type UnimplementedScaffolderServer struct {
}

func (*UnimplementedScaffolderServer) ListTemplates(ctx context.Context, req *Empty) (*ListTemplatesReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListTemplates not implemented")
}
func (*UnimplementedScaffolderServer) Create(ctx context.Context, req *CreateRequest) (*CreateReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}

func RegisterScaffolderServer(s *grpc.Server, srv ScaffolderServer) {
	s.RegisterService(&_Scaffolder_serviceDesc, srv)
}

func _Scaffolder_ListTemplates_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScaffolderServer).ListTemplates(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/spotify.backstage.scaffolder.v1.Scaffolder/ListTemplates",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScaffolderServer).ListTemplates(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Scaffolder_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ScaffolderServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/spotify.backstage.scaffolder.v1.Scaffolder/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ScaffolderServer).Create(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Scaffolder_serviceDesc = grpc.ServiceDesc{
	ServiceName: "spotify.backstage.scaffolder.v1.Scaffolder",
	HandlerType: (*ScaffolderServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListTemplates",
			Handler:    _Scaffolder_ListTemplates_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _Scaffolder_Create_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "scaffolder/v1/scaffolder.proto",
}
